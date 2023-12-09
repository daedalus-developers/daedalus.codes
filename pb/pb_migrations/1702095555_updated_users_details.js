/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ke436i7mqpn0g09")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_fi1FSiz` ON `users_details` (`user`)"
  ]

  // remove
  collection.schema.removeField("tfg2ykwy")

  // remove
  collection.schema.removeField("ovccqsrz")

  // remove
  collection.schema.removeField("eyzsozn3")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ke436i7mqpn0g09")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_yL6nU7Q` ON `users_details` (\n  `x`,\n  `github`,\n  `linkedin`\n)",
    "CREATE UNIQUE INDEX `idx_fi1FSiz` ON `users_details` (`user`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tfg2ykwy",
    "name": "linkedin",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": [
        "linkedin.com"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ovccqsrz",
    "name": "x",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": [
        "twitter.com"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eyzsozn3",
    "name": "github",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": [
        "github.com"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
