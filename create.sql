CREATE TABLE User(

    id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    password VARCHAR(100) NOT NULL,
    position VARCHAR(100) DEFAULT 'admin',
    phonenumber VARCHAR(100),

    PRIMARY KEY(id)
);

CREATE TABLE Store(

    id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    masterUserId INT NOT NULL,

    PRIMARY KEY(id),
    FOREIGN KEY(masterUserId) REFERENCES User(id)
);

CREATE TABLE Category(

    id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    storeId INT NOT NULL,

    PRIMARY KEY(id),
    FOREIGN KEY(storeId) REFERENCES Store(id)
);

CREATE TABLE SubCategory(

    id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    categoryId INT NOT NULL,

    PRIMARY KEY(id),
    FOREIGN KEY(categoryId) REFERENCES Category(id)
);

CREATE TABLE Menu(

    id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    info VARCHAR(255),
    price INT DEFAULT 0,
    photoURL VARCHAR(255),

    PRIMARY KEY(id)
);

CREATE TABLE MenuSearch(

    id INT NOT NULL,
    subCategoryId INT NOT NULL,
    menuId INT NOT NULL,

    PRIMARY KEY(id),
    FOREIGN KEY(subCategoryId) REFERENCES SubCategory(id),
    FOREIGN KEY(menuId) REFERENCES Menu(id)
);

CREATE TABLE MenuOption(

    id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    menuId INT NOT NULL,

    PRIMARY KEY(id),
    FOREIGN KEY(menuId) REFERENCES Menu(id)
);

CREATE TABLE OptionInfo(

    id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    price INT DEFAULT 0,
    photoURL VARCHAR(255),
    optionId INT NOT NULL,

    PRIMARY KEY(id),
    FOREIGN KEY(optionId) REFERENCES MenuOption(id)
);