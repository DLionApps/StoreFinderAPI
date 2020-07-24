import { SellerModel } from "../Models/SellerModel";
const Joi = require("@hapi/joi");

export class SellerController {
  // post
  public addEntityRoute;
  // put
  public updateEntityByIdRoute;
  // get
  public getAllEntityRoute;
  // get
  public getEntityByIdRoute;
  // delete
  public deleteEntityByIdRoute;

  constructor() {
    this.initBaseRoutes();
  }

  private initBaseRoutes(): void {
    this.addEntityRoute = () => {
      return {
        method: "POST",
        path: "/seller",
        options: {
          validate: {
            payload: Joi.object({
              email: Joi.string().required(),
              password: Joi.string().required(),
            }),
          },
        },
        handler: async (request, h) => {
          try {
            var seller = new SellerModel(request.payload);
            var result = await seller.save();
            return h.response(result);
          } catch (error) {
            return h.response(error).code(500);
          }
        },
      };
    };

    this.updateEntityByIdRoute = () => {
      return {
        method: "PUT",
        path: "/seller/{id}",
        handler: async (request, h) => {
          try {
            var result = await SellerModel.findByIdAndUpdate(
              request.params.id,
              request.payload,
              { new: true }
            );
            return h.response(result);
          } catch (error) {
            return h.response(error).code(500);
          }
        },
      };
    };

    this.getAllEntityRoute = () => {
      return {
        method: "GET",
        path: "/sellers",
        handler: async (request, h) => {
          try {
            var sellers = await SellerModel.find().exec();
            return h.response(sellers);
          } catch (error) {
            return h.response(error).code(500);
          }
        },
      };
    };

    this.getEntityByIdRoute = () => {
      return {
        method: "GET",
        path: "/seller/{id}",
        handler: async (request, h) => {
          try {
            var seller = await SellerModel.findById(request.params.id).exec();
            return h.response(seller);
          } catch (error) {
            return h.response(error).code(500);
          }
        },
      };
    };

    this.deleteEntityByIdRoute = () => {
      return {
        method: "DELETE",
        path: "/seller/{id}",
        handler: async (request, h) => {
          try {
            var result = await SellerModel.findByIdAndDelete(request.params.id);
            return h.response(result);
          } catch (error) {
            return h.response(error).code(500);
          }
        },
      };
    };
  }

  public getAllRoutes(): any[] {
    return [
      this.addEntityRoute(),
      this.updateEntityByIdRoute(),
      this.getAllEntityRoute(),
      this.getEntityByIdRoute(),
      this.deleteEntityByIdRoute(),
    ];
  }
}
