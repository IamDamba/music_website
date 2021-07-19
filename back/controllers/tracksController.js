module.exports.list_get = async(req, res)=>{
  try {
    res.send(res.paginatedResults)
  } catch (err) {
    res.status(500).json({err: err.message});
  }
}

module.exports.id_get = async(req, res)=>{
  try {
    res.send(res.queryResults)
  } catch (err) {
    res.status(500).json({err: err.message});
  }
}