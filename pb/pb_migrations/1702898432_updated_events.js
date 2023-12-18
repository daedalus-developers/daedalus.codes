/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0xp1wd4koyuvvgq")

  collection.indexes = []

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0xp1wd4koyuvvgq")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_R9VTafZ` ON `events` (`title`)"
  ]

  return dao.saveCollection(collection)
})
