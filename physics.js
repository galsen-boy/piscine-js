  const getAcceleration = (obj) => {
    if (obj.hasOwnProperty('f') && obj.hasOwnProperty('m')) {
        return obj.f / obj.m
    } else if (obj.hasOwnProperty('Δv') && obj.hasOwnProperty('Δt')) {
        return obj.Δv / obj.Δt
    } else if (obj.hasOwnProperty('t') && obj.hasOwnProperty('d')) {
        return 2*obj.t /(obj.d/10)**2

    } else {
        return "impossible"
    }
  }