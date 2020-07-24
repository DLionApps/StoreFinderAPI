const env = [
  {
    envionment: "Test",
    connectionString:
      "mongodb+srv://SysAdmin:19921230@clusterone.la7eb.gcp.mongodb.net/test?authSource=admin&replicaSet=atlas-hwt9x5-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
    options: { useUnifiedTopology: true, useNewUrlParser: true },
  },
  {
    envionment: "Dev",
    connectionString:
      "mongodb+srv://SysAdmin:19921230@clusterone.la7eb.gcp.mongodb.net/test?authSource=admin&replicaSet=atlas-hwt9x5-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
    options: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    },
  },
];

module.exports = env[1];
