export const selectRandomIDs = (objectIDs: number[], selection: number) => {
    const total = objectIDs.length
  
    const IDs: number[] = []
  
    while (IDs.length < 10 && IDs.length < total) {
      let randomID = Math.floor(Math.random() * total)
      const id = objectIDs[randomID]
      if (!IDs.includes(id)) {
        IDs.push(id)
      }
    }
  
    return IDs
  }
  