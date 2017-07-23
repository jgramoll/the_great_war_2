function asyncRoute (path, componentPromise) {
  return {
    path,
    getComponent (_location, cb) {
      componentPromise().then(module => cb(null, module.default))
    }
  }
}

export default asyncRoute
