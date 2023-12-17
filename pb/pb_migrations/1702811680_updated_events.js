/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0xp1wd4koyuvvgq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ra4cwdvk",
    "name": "description",
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
  const collection = dao.findCollectionByNameOrId("0xp1wd4koyuvvgq")

  // remove
  collection.schema.removeField("ra4cwdvk")

  return dao.saveCollection(collection)
})
