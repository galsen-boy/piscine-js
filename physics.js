  const getAcceleration = (object) => {
    if (object.hasOwnProperty('f') && object.hasOwnProperty('m')) {
        return object.f / object.m
    } else if (object.hasOwnProperty('Δv') && object.hasOwnProperty('Δt')) {
        return object.Δv / object.Δt
    } else if (object.hasOwnProperty('t') && object.hasOwnProperty('d')) {
        return 2*object.t /(object.d/10)**2

    } else {
        return "impossible"
    }
  }
  console.log(getAcceleration(object))