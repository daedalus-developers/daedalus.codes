/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0xp1wd4koyuvvgq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mebw7sul",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "open",
        "ongoing",
        "canceled",
        "finished"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0xp1wd4koyuvvgq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mebw7sul",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "open",
        "ongoing",
        "canceled"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
