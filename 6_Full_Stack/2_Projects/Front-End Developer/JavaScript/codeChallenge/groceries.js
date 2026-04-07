// Write function below
const groceries = arr => {
  let items = []
  let last = []
  for (const obj of arr) {
    items.push(obj.item)
  }
  last = items.splice(-1, 1)
  if (items.length === 0) {
    return last[0]
  } else {
      let new_str = items.join(', ')
      return `${new_str} and ${last[0]}`
  }
}

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'

groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'

groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
