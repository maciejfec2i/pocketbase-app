migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("982wpmqkq5d2bct")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sqlutyvz",
    "name": "biography",
    "type": "text",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("982wpmqkq5d2bct")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sqlutyvz",
    "name": "bio",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
