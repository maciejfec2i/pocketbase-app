migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("982wpmqkq5d2bct")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r16k78ip",
    "name": "fullname",
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
    "id": "r16k78ip",
    "name": "full_name",
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
