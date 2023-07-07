migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("982wpmqkq5d2bct")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("982wpmqkq5d2bct")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
