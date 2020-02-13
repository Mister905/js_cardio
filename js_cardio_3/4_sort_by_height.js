// CHALLENGE 4: Sort By Height
// Some people are standing in a row in a park. There are threes
// between them which cannot be moved. Your task is to rearrange
// the people by their heights in ascending order without moving
// the trees

const sort_by_height = array => {
  let tree_index = array.map((item, i) => {
    if (item == -1) {
      return i;
    } else {
      return false;
    }
  });

  tree_index = tree_index.filter(item => item !== false);

  let sans_trees = array.filter(item => item !== -1);

  sans_trees = sans_trees.sort();

  for (let i = 0; i < tree_index.length; i++) {
    const new_index = tree_index[i];
    sans_trees.splice(new_index, 0, -1);
  }

  console.log(sans_trees);
};

let array = [-1, 150, 190, 170, -1, -1, 160, 180];

sort_by_height(array);
