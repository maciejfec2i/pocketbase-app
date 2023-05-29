migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pdsesagbyf831ff")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pdsesagbyf831ff")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
