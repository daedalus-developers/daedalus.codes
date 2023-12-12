/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ke436i7mqpn0g09")

  // remove
  collection.schema.removeField("kp2qpp2g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kmgya5ev",
    "name": "x",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ke436i7mqpn0g09")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kp2qpp2g",
    "name": "x",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("kmgya5ev")

  return dao.saveCollection(collection)
})
