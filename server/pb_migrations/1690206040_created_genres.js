migrate((db) => {
  const collection = new Collection({
    "id": "e7x9nrcfkahr9xo",
    "created": "2023-07-24 13:40:40.806Z",
    "updated": "2023-07-24 13:40:40.806Z",
    "name": "genres",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qm15fb1j",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("e7x9nrcfkahr9xo");

  return dao.deleteCollection(collection);
})
