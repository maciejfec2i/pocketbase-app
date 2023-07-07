migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("982wpmqkq5d2bct")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qas9wwzw",
    "name": "photoUrl",
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

  // remove
  collection.schema.removeField("qas9wwzw")

  return dao.saveCollection(collection)
})
