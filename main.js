// practice promise

const users = [
  {
    id: 1,
    name: "Chris",
    avatar:
      "https://files.fullstack.edu.vn/f8-prod/user_photos/183516/62343254a7beb.jpg",
  },
  {
    id: 2,
    name: "Son dang",
    avatar:
      "https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg",
  },
  {
    id: 3,
    name: "Ngoc anh",
    avatar:
      "https://files.fullstack.edu.vn/f8-prod/user_photos/247266/6321797fa05d7.jpg",
  },
];

const comments = [
  {
    id: 1,
    user_id: 1,
    message: "Xem lú luôn",
  },
  {
    id: 2,
    user_id: 2,
    message: "Xem vài lần mới hiểu được Promise",
  },
];

function getComments() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

function getUserByIds(ids = []) {
  return new Promise((resolve) => {
    setTimeout(function () {
      const data = users.filter((user) => ids.includes(user.id));

      resolve(data);
    }, 1000);
  });
}

getComments()
  .then(function (comments) {
    const userIds = comments.map((comment) => comment.user_id);

    return getUserByIds(userIds).then(function (users) {
      return comments.map((comment) => {
        return {
          ...comment,
          user: users.find((item) => item.id === comment.user_id),
        };
      });
    });
  })
  .then(function (data) {
    console.log({ data });
    const boxCommennt = document.getElementById("comments-block");

    const html = data
      .map((item) => {
        return `<li>
        <img src=${item.user.avatar} width="30" height="30" />
        <span>
        ${item.user.name}
        </span>
        <div>${item.message}</div>
      </li>`;
      })
      .join();
    boxCommennt.innerHTML = html;
  });
