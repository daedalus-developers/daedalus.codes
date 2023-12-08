/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kfyg1x7hetvkf87")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zlimafop",
    "name": "category",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("kfyg1x7hetvkf87")

  // remove
  collection.schema.removeField("zlimafop")

  return dao.saveCollection(collection)
})
