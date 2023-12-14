/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0rmz3w5ypfkp0o0",
    "created": "2023-12-14 11:46:04.546Z",
    "updated": "2023-12-14 11:46:04.546Z",
    "name": "media",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3upsladh",
        "name": "field",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0rmz3w5ypfkp0o0");

  return dao.deleteCollection(collection);
})
