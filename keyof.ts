const Icons = {
  "home": "./test/home.svg",
  "add": "./test/add.svg",
  "remove": "./test/remove.svg",
}

type Icon = typeof Icons

const icon: keyof Icon = "remove"