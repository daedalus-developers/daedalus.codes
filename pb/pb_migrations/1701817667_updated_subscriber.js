/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1p5euezfrt673ut")

  collection.name = "subscribers"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1p5euezfrt673ut")

  collection.name = "subscriber"

  return dao.saveCollection(collection)
})
