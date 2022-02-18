# Project Scoop - ID Assignment 2

Welcome to Project Scoop! 

Finding current style of ecommerce website as well as the checkout process boring? Well, we got you. Presenting to you a new and improved website for the brand, Scoop Wholefoods. This updated platform allows users to view and purchase in-stock items of their choice while earning rewards and discounts as a member. In addition to that, gamification features have been added to elevate users’ shopping experience. 

From attracting the user’s attention to enhancing every user’s shopping experience, all features and design are researched, refined and well-thought of from all aspects. An upgrade of the UI and UX will definitely bring in more users as well as more returning users while standing out from the crowd. The process has been streamlined to ensure a smoother flow from signing up to checking out.  This modern and minimalistic website is created with the goal of a seamless purchase and transaction process. 
## Design Process
### Phase One - Ideation
When we first received this assignment, we were given multiple projects to work with. After much consideration, we decided to proceed with an ecoomerce website with an addition of gamification features as we able to execute most of the requirements such as the usage of API(s) and Lottie animation. 

<<<<<<< HEAD
As we looked into other e-commerce websites, large and small, such as Lazada and Shopee, we felt that these sites were plastered with popups and intrusive ads with a clunky user interfaces and we felt that we improve upon this experience by designing a new e-commerce platform with the user at the forefront. This meant rethinking how we could potentially upsell users with products through recommendations and rewards instead. As we looked through these sites, we noted down what we liked, as well as did not like in each website and these notes helped to guide the design of our final site.
=======
As we looked into other e-commerce websites, large and small, such as Lazada and Shoppe, we felt that these sites were plastered with popups and intrusive ads with a clunky user interfaces and we felt that we improve upon this experience by designing a new e-commerce platform with the user at the forefront. This meant rethinking how we could potentially upsell users with products through recommendations and rewards instead. As we looked through these sites, we noted down what we liked, as well as did not like in each website and these notes helped to guide the design of our final site.
>>>>>>> 4b42006cb7b5a9fc0bb16f1d4a9ff7496e8c61e0

![image](https://user-images.githubusercontent.com/36725840/154510953-1a53f758-1335-4fb8-91dd-f38ef01f6557.png)
![image](https://user-images.githubusercontent.com/36725840/154511390-4892d185-db6f-40b7-a354-735b9a249f39.png)

One of the things features we loved when looking at other e-commerce websites was the use of product images to feature the product prominently, though we found the ads and promotions getting in the way of the site itself, often times burying important sections like Categories beneath dozens of ads. We felt that, as a user, the goal is to get it done as quickly as possible and these overly large product ads were getting in the way of the goal.

Deciding on the products was not an easy task. After hours of researching, we agreed to use [Scoop Wholefoods SG](https://sg.scoopwholefoods.com/) as a basis of the website. Knowing that there is also an ecommerce website for Sccop Wholefood, we decided to recreate the website with a brand new design alongside interesting features we thought the website could benefit from, such as a more comprehensive rewards system, including a spin the wheel game. Using the same products and category, we narrowed down to 6 different category with 10 products each to simpolify the project based on the lecturer's feedback. 

In this phase, we have identified the following: 
- end-users: Scoop e-commerce shoppers (members) and general public (non-members)
- end-goal: to recreate the existing site into a minimalistic website with improved functionality.  

### Phase Two - Design/Prototype
#### Front-End
<<<<<<< HEAD
While designing the website, we kept in mind of the useful features which can be implemented as well as user interactivity with the site while ensuring a smooth process throughout. Using Adobe XD as a wireframe tool, we started designing the desktop and mobile view of the app. 
=======
While designing the website, we kept in mind of the useful features which can be implemented as well as user interactivity with the site while ensuring a smooth process throughout. Using Adobe XD as a wireframe tool, we started designing the mobile view of the app. 
>>>>>>> 4b42006cb7b5a9fc0bb16f1d4a9ff7496e8c61e0

![image](https://user-images.githubusercontent.com/36725840/154512897-b04a043a-1999-43bf-8bd6-adb6f05b0193.png)

The reason we designed the mobile view first was to ensure the design would ultimately scale nicely for users on smaller devices and by structuring the design similar to what we had seen in other mobile apps, we created a simple-to-use mobile optimised design that would work perfectly on any device.

![image](https://user-images.githubusercontent.com/36725840/154513291-3871a1ea-3a2d-49a8-8d9e-34410fad1862.png)

That said, several screens had to be edited to suit the varying screen sizes, notably the moble product page was heavily inspired by other e-commerce apps, however this design didn't make much sense on larger devices such as desktops and the design had to be rethought out for such cases.
<<<<<<< HEAD

![image](https://user-images.githubusercontent.com/36725840/154514443-76b9c4e8-b0da-45b7-83cd-49bbfb7c6933.png)

In order to maintain consistency throughout the design, we stuck to 5 colours.
- a dark blue for text
- 2 background colours
  - a light blue and white to provide some amount of contrast.
  - In general, the white was used to highlight any information that was in the foreground while the light blue was used to highlight elements in the background
- 2 accent colours
  - The blue served as our primary accent or tint colour throughout the entire project. Maintaining a consistent accent colour helped to ensure that the site looked similar as the user navigated between pages.
  - The yellow served as a secondary accent colour used to highlight any information such as progress bars.

=======

![image](https://user-images.githubusercontent.com/36725840/154514443-76b9c4e8-b0da-45b7-83cd-49bbfb7c6933.png)

In order to maintain consistency throughout the design, we stuck to 5 colours.
- a dark blue for text
- 2 background colours
  - a light blue and white to provide some amount of contrast.
  - In general, the white was used to highlight any information that was in the foreground while the light blue was used to highlight elements in the background
- 2 accent colours
  - The blue served as our primary accent or tint colour throughout the entire project. Maintaining a consistent accent colour helped to ensure that the site looked similar as the user navigated between pages.
  - The yellow served as a secondary accent colour used to highlight any information such as progress bars.

>>>>>>> 4b42006cb7b5a9fc0bb16f1d4a9ff7496e8c61e0
![image](https://user-images.githubusercontent.com/36725840/154515253-58371f58-7ce6-4b94-b03c-4d69d7bcdd98.png)
Wireframe document: [shared link](https://xd.adobe.com/view/156c3b6b-6028-4da8-9f91-a24643752036-403f/)

A core consideration was how users would interact with the site itself, this led us to coming up with diagrams to map our user flows and how they would perform certain actions from authentication to purchasing a product and redeeming prizes.
```mermaid
flowchart TD
    subgraph Store
        A[Home] <--> D[Search]
        A ---> E[Product]
        A ---> F[Category]

        D ---> E
        F ---> E
        E <--> G[Cart]
        G --> H[Checkout]
        H --> I[Delivery Confirmation]
    end
    A <---> C
    A <---> B
    H --> L
    I ---> Gamification
    
    subgraph Authentication
        B[Sign Up] <--> C[Sign In]
        subgraph B[Sign Up]
            O[User Details] --> M[Add Address]
            M --> P[Add Contact Info]
            P --> L[Add Payment Method]
        end
    end

    subgraph Gamification
        J[Dot Game] --> K[Spin the wheel]
    end
```
<<<<<<< HEAD
=======

Interactivity is a fundemental part of any website, and we aimed to incorporate this within our site too. 

![Scoops Wholefoods - Google Chrome  2022-02-17 at 11 35 23 PM](https://user-images.githubusercontent.com/36725840/154515635-8b343cd6-bfed-4754-8db2-06f9d2d545c0.gif)
![Scoops Wholefoods - Google Chrome  2022-02-17 at 11 38 33 PM](https://user-images.githubusercontent.com/36725840/154516152-9919e28a-3928-45db-adea-fd59916e3c71.gif)
![Scoops Wholefoods - Google Chrome  2022-02-17 at 11 42 15 PM](https://user-images.githubusercontent.com/36725840/154516854-43a7c61e-ba62-4aa4-82eb-d0659a95eae6.gif)

One of the challenges we faced was "How do we make a button appear clickable?". With dozens of different types of buttons within the project, it was important that the user knew which areas were clickable and which areas were not. This led us to add many small effects such as adjusting shadows, inverting or changing colours when the user hovered over interactable interface elements to make it clear to the user that they were clickable.

One of the things we've learnt was the importance of empty states. These are screens to show when= there is no data present. As it can be frustrating at times when no data shows up, be it from a bad search query or simply because the store does not offer the product, we added custom empty states with animations powered by Lottie.

![Scoops Wholefoods - Google Chrome  2022-02-18 at 12 00 08 AM](https://user-images.githubusercontent.com/36725840/154520341-2de0d4b6-4461-4145-9e8d-3b9f40af181e.gif)
![Scoops Wholefoods - Google Chrome  2022-02-18 at 12 01 02 AM](https://user-images.githubusercontent.com/36725840/154520554-d4a2e5db-925c-488c-9bd5-7c6b8aab6284.gif)

These little features allowed us to experiment with Lottie animations and customise animations using Adobe After Effects to create the exact animation we wanted that is consistent with the design theme within the site.

![Scoops Wholefoods - Google Chrome  2022-02-18 at 12 04 05 AM](https://user-images.githubusercontent.com/36725840/154521224-e2c2b6de-b128-4e0a-8757-a68dfef7597f.gif)

Throughout this, we also found out that animations can serve an important role in brightening up the site, giving it a more light-hearted feel. Above is an example from the confirmation screen with confetti to show that they can start playing games to win prizes.

#### Back-End
In order to allow products and categories to be easily updated, these information are stored within a [JSON file](https://github.com/jiachenyee/IDAssignment2/blob/main/resources/categories.json) and information from the file is loaded up based on the URL queries with products being identified by their SKUs (`/product?SKU=MyProductSKU`) and categories being identified by their name (`/category?name=MyCategoryName`). This allowed us to ensure the data could be easily modified if the store ever needed to add more products.

We added a sign in/up flow to keep track of customers and their points. We ultimately decided on [RestDB]() as our preferred database option thanks to the familiarity after tinkering around with it in class. This allowed us to integrate a database into our website and get the necessary data. When designing the original wireframes, we also thought about the data we were storing in the RestDB database and this helped us especially when coming to implementation.

An example of our purchases in RestDB.
![image](https://user-images.githubusercontent.com/36725840/154518851-5222d889-35a2-44f4-acf0-95df778f4bd3.png)

Another consideration was what data to persist, and where to persist said data. We settled on storing the following information
- RestDB
  - **Members**: Store information about each member
  - **Purchases**: Store information about each purchase made
- Local Storage
  - **Member**: Store a copy of the user's information to ensure users do not need to sign in again everytime to use the service.
  - **Cart**: We felt that the cart did not need to be persisted in RestDB and could just be stored in local storage.

### Phase Three - Coding
After getting confirmation from our lecturer on our idea, we then proceed to start coding using the IDE, [Visual Studio Code](). Work is divided and delegated between the members based on the different sections of the website. Coding time is also carefully planned out in so as to prevent any conflict of the same code being edited at the same time. Knowing that more people view ecommerce websites on desktops, we decided to put more emphasis on the desktop version while setting the mobile version secondary in importance. We updated each other on our progress as we coded according to the wireframes design and helped out when problems or queries arise.
>>>>>>> 4b42006cb7b5a9fc0bb16f1d4a9ff7496e8c61e0

Interactivity is a fundemental part of any website, and we aimed to incorporate this within our site too. 

![Scoops Wholefoods - Google Chrome  2022-02-17 at 11 35 23 PM](https://user-images.githubusercontent.com/36725840/154515635-8b343cd6-bfed-4754-8db2-06f9d2d545c0.gif)
![Scoops Wholefoods - Google Chrome  2022-02-17 at 11 38 33 PM](https://user-images.githubusercontent.com/36725840/154516152-9919e28a-3928-45db-adea-fd59916e3c71.gif)
![Scoops Wholefoods - Google Chrome  2022-02-17 at 11 42 15 PM](https://user-images.githubusercontent.com/36725840/154516854-43a7c61e-ba62-4aa4-82eb-d0659a95eae6.gif)

One of the challenges we faced was "How do we make a button appear clickable?". With dozens of different types of buttons within the project, it was important that the user knew which areas were clickable and which areas were not. This led us to add many small effects such as adjusting shadows, inverting or changing colours when the user hovered over interactable interface elements to make it clear to the user that they were clickable.

One of the things we've learnt was the importance of empty states. These are screens to show when= there is no data present. As it can be frustrating at times when no data shows up, be it from a bad search query or simply because the store does not offer the product, we added custom empty states with animations powered by Lottie.

![Scoops Wholefoods - Google Chrome  2022-02-18 at 12 00 08 AM](https://user-images.githubusercontent.com/36725840/154520341-2de0d4b6-4461-4145-9e8d-3b9f40af181e.gif)
![Scoops Wholefoods - Google Chrome  2022-02-18 at 12 01 02 AM](https://user-images.githubusercontent.com/36725840/154520554-d4a2e5db-925c-488c-9bd5-7c6b8aab6284.gif)

These little features allowed us to experiment with Lottie animations and customise animations using Adobe After Effects to create the exact animation we wanted that is consistent with the design theme within the site.

![Scoops Wholefoods - Google Chrome  2022-02-18 at 12 04 05 AM](https://user-images.githubusercontent.com/36725840/154521224-e2c2b6de-b128-4e0a-8757-a68dfef7597f.gif)

Throughout this, we also found out that animations can serve an important role in brightening up the site, giving it a more light-hearted feel. Above is an example from the confirmation screen with confetti to show that they can start playing games to win prizes.

#### Back-End
In order to allow products and categories to be easily updated, these information are stored within a [JSON file](https://github.com/jiachenyee/IDAssignment2/blob/main/resources/categories.json) and information from the file is loaded up based on the URL queries with products being identified by their SKUs (`/product?SKU=MyProductSKU`) and categories being identified by their name (`/category?name=MyCategoryName`). This allowed us to ensure the data could be easily modified if the store ever needed to add more products.

We added a sign in/up flow to keep track of customers and their points. We ultimately decided on [RestDB]() as our preferred database option thanks to the familiarity after tinkering around with it in class. This allowed us to integrate a database into our website and get the necessary data. When designing the original wireframes, we also thought about the data we were storing in the RestDB database and this helped us especially when coming to implementation.

An example of our purchases in RestDB.
![image](https://user-images.githubusercontent.com/36725840/154518851-5222d889-35a2-44f4-acf0-95df778f4bd3.png)

Another consideration was what data to persist, and where to persist said data. We settled on storing the following information
- RestDB
  - **Members**: Store information about each member
  - **Purchases**: Store information about each purchase made
- Local Storage
  - **Member**: Store a copy of the user's information to ensure users do not need to sign in again everytime to use the service.
  - **Cart**: We felt that the cart did not need to be persisted in RestDB and could just be stored in local storage.

### Phase Three - Coding
After getting confirmation from our lecturer on our idea, we then proceed to start coding using the IDE, [Visual Studio Code](). Work is divided and delegated between the members based on the different sections of the website. Coding time is also carefully planned out in so as to prevent any conflict of the same code being edited at the same time. Knowing that more people view ecommerce websites on desktops, we decided to put more emphasis on the desktop version while setting the mobile version secondary in importance. We updated each other on our progress as we coded according to the wireframes design and helped out when problems or queries arise.

.......

### Phase Four - Test/Launch
In this final stage, we test each page making sure that all of the links and elements are working as intended. We also tried to launch the website on different browsers such as google chrome and safari. Many mistakes were made, from wrong colors to post/get request to the database. However, these were resolved through consultation with the lecturer and the internet. The process from sign in to the final checkout was tested mulitple times to ensure a smooth and successful run which will lead to satisfactory users. 



## Features
### Existing Features
- Personalized Greeting
  - Location: {TOP}
      - Home Page
  - Purpose: 
      - To create a personalized feel for members. 
  - Description: 
      - For members, the header will contain "Hello" + their username which is taken when they sign up for Scoop membership. 
      - For non-members, the header will contain "Hello" instead. 
  - {display}



- Search Bar
  - Location: {TOP}
      - Home Page, Product Page, Category Page, Cart Page, Checkout/Payment Page
  - Purpose: 
      - To allow for easier navigation throughout the website to look for desired products, shortening the process of searching individual category. 
  - Description: 
      - Type in any keyword - "Choco", "Baking", "Tea" - and hit the "Enter" button. 
      - If there is/are result(s), it will be displayed as rectangular card format with the product image, name and description. 
      - If there is no result, a simple animation consisting of a magnifying glass and a question mark will be displayed alongside a message, "There's nothing to see here". 
  - {display}



- Cart Button
  - Location: {TOP}
      - Home Page, Category Page, Product Page
  - Purpose: 
      - To allow quick access to the member's cart for an overview of their current items or for checking out to make payment.  
  - Description
      - Click the button to proceed to the Cart Page.
      - This button is only applicable to members only, for non-members, the button will be disabled or removed **CHOOSE ONE** due to the limited information of the users.
  - {display}



- Points Bar
  - Location: {Bottom of blue containers} 
      - Home Page, Product Page, Cart Page, Payment Page, Success Page
  - Purpose: 
      - To earn points as members shop and purchase products, leading to amazing rewards such as free products or discount vouchers (discounts cannot be found in this website). 
      - To visualize their current progress and estimate how many products need to be purchase before earning rewards. 
      - To entice users to visit the website more often and shop for more products, increasing the sale for the store while improving the user experience.  
  - Description
      - This is only applicable for members only. 
      - When members first enter the website after logging in or signing up, they are greeted with their point bar with the yellow strip indicating their current points out of 1000. 
      - In the selected Product Page, members can increase the quantity of the products and the additional points will be displayed in the extended translucent yellow strip accordingly. 
      - In the cart page, additional points will also be displayed accordingly when members add in more items and increase their quantity. 
      - The points are calculated by rounding down the total price of the items excluding tax and delivery. For example, if only 5 of Almonds Dark Chocolate of price $23.60 each is added to cart, the additional points displayed will be 118 points. 
      - Upon making the final payment, the translucent bar will be converted to a solid bar and changes to the current points will be edited. 
      - If the points accumulated exceed or reaches the 1000 limit, the bar resets to 0 and the members will be entitled to play the dot game and the wheel game to earn more rewards. 
      - For the points that exceed the limit, the extra points will be brought forward and added to the new bar. 
  - {display}



- Quick Sign In and Sign Up 
  - Location: {Blue Container}
      - Home Page
  - Purpose: 
      - To access the sign in and sign up page easily. 
  - Description
      - This is appplicable in guest mode only. 
      - For current members, simply click on the sign in button to login to their account and begin shopping. 
      - For non-members, clicking on the sign up button will bring them to a sign up form where they can sign up for membership and shop without any restrictions. 
  - {display}



- For You/Popular Section
  - Location: {Bottom}
      - Home Page
  - Purpose: 
      - To introduce new and recommended products to users, encouraging them to add to cart at a glance. 
  - Description
      - For members, the section will be labelled as "For You Page" and it will be filled with new incoming products together with previously purchased prodcuts.  
      - For non-members, the section will be labelled as "Popular Page" and it will be filled with new but randomized products.
      - A total of 10 different products will be displayed to the users. 
  - {display}



- Sold Out/New Logos 
  - Location: {Top right corner of product image}
      - Home Page, Category Page, Product Page
  - Purpose: 
      - To inform users about current products which are newly released as well as those which are out-of-stock. 
  - Description
      - For products which are just released into the store, they are labelled with the "New" logo. 
      - For products which are unavailable due to limited or not in stock, they are labelled with the "Sold Out" Logo. 
  - {display}



- Selected Product **NOT DONE**
  - Location: 
      - Product Page
  - Purpose: 
      - This feature provides users with more information on the product they have selected, allowing them to make a more informed choice before purchasing.
  - Description
      - Equipped with the product image (left container), product name (top left of right container) and product description (middle of right container), users can better understand where the product is from, what is it made up of and is there any allergy. 
      - A quantity box (top right of right container) is added to allow users to control the number of selected items they wish to purchase. 
      - The point bar and the price (bottom of right container) of the items will be displayed accordingly if the quanity or the item changes. 
      - The blue container acts as both a holder for the point bar and price as well as a button for users to add the product to cart. 
  - {display}
  - Store items are presented to users in the form of cards with the item name, price and image. Due to time constraint, only 10 images from each of the 6 categories are displayed and users are able to click on any of the items which brings them to a product description and add to cart page. 
  - {display}



- Filters 
  - Location: {Top}
      - Product Page
  - Purpose: 
      - To provide more information about the selected products, allowing them to make a more informed decision before purchasing. 
  - Description
      - Under the product name, filters such as Vegan, Halal and Allergens are added for users so that they are aware of the dietary preferences present in this selected product. 
      - These filters also include the cateogory type for easier reference. 
      - They vayr
  - {display}
  - For each product in the Products Page, there are filters added at the bottom of the product name to provide more information such as Vegan and Halal for better understanding of the product. For the collated products in each category are also provided with the relevent filters containing the product category name for easier reference. 
  - {display}



- Products Dipslay 
  - Location: 
      - Category Page
  - Purpose: 
      - This feature givs users a variety of items to choose from based on their preferred category. 
  - Description
      - Upon selecting the product category in the Home Page, users will be redirected to a new page where all the products of that category will be displayed in format of cards. 
      - Due to limitations, only 10 products of the 6 different category will be shown. 
      - Clicking on any products will bring the user to the selected Product Page.
  - {display}



- View Cart
  - Location: 
      - Cart Page
  - Purpose: 
      - This feature provides an overview of the current items and the prices, allowing users to remove or reduce any items based on their need and budget.  
  - Description
      - An overview of the list of selected items in their cart will be displayed on the left side of the page with their corresponding prices and quantities. 
      - Items can be removed by reducing the quantity of that item to 0. 
      - Prices in terms of subtotal, delivery and tax (7% GST) are displayed in the right side of the page with the huge checkout button comprising the point bar and the total price. 
  - {display}



- Confirm Payment
  - Location: 
      - Payment/Checkout Page
  - Purpose: 
      - hi
  - Description
      - A mock-up credit card is displayed on the left side of the container, alongside
  - {display}


- Success + Delivery 
  - Location: 
      - Success Page
  - Purpose: 
      - hi
  - Description
      - hi
  - {display}



- Hyperlinks 
  - Location: 
      - Sign In and Sign Up Page
  - Purpose: 
      - hi
  - Description
      - Clicking on the link in the sign in page will bring users to the sign up page and vice versa
  - {display}


- Data Validation 
  - Location: 
      - Sign Up Page, Address Form Page, Card Form Page, Payment Page
  - Purpose: 
      - hi
  - Description
      - hi
  - {display}



- Add card
  - Location: 
      - hi
  - Purpose: 
      - hi
  - Description
      - hi
  - {display}


- Jumping Game 
  - Location: 
      - Dot Game Page
  - Purpose: 
      - hi
  - Description
      - hi
  - {display}



- Wheel Game
  - Location: 
      - Spin The Wheel Game Page
  - Purpose: 
      - hi
  - Description
      - There is a wheel is divided into 10 portions, each containing different products. 
      - The total number of spins, which is determined from the previous dot game, is displayed at the top of the page. 
      - When the user click on the spin button, the wheel would automatically spin at random speeds. 
      - The item would be determined through by selecting the item based on its position closest to the arrow. 
      - The item will be added to the cart immediately. 
  - {display}


### Features Left to Implement
- Sign Out/Log Out Button
  - Description: 

## Technologies Used
The following are the various languages, frameworks, libraries, and any other tools used to construct this project. 

- [HTML](https://html.com/)
- The project uses **HTML** to describe the structure of web pages.
- [CSS](http://css.com/)
  - The project uses **CSS** to describe the presentation of web pages, including colors, layout and fonts.
- [JavaScript](https://www.javascript.com/)
  - The project uses **JavaScript** to create highly responsive  and interactive interfaces that improve user experience and provide dynmic functionality.
- [JSON](https://www.json.org/)
  - The project uses **JSON** to transmit data in web applications. 
- [JQuery](https://jquery.com)
  - The project uses **JQuery** to simplify DOM manipulation.????????????????
- [Adobe XD](https://www.adobe.com/sg/products/xd.html)
  - The project uses **XD** as a design platform to create the prototypes/wireframes.
- [GitHub](https://github.com/)
  - The project uses **GitHub** uses a code hosting platform for version control and collaboration.
- [VSC](https://code.visualstudio.com/)
  - This project uses **Visual Studio Code** as a source-code editor for development operations like debugging, task running and version control.
- [RestDB]()
  - This project uses **RestDB** as a database tool to store user's information and purchase.


## Testing
1. Forms 
      1. Sign In
      2. Sign Up 
      3. Address
      4. Payment 
      5. Card
2. Home Page
3. Product(selected) Page
4. Category Page
5. Cart Page
6. Checkout/Payment Page 
7. Success Page
8. Games 
      1. Jumping Dot
      2. Spin the Wheel 



For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Credits
### Content and Media
- Product Information - Name, Description, Price, Image are taken from [Scoop Wholefoods SG](https://scoopwholefoodsshop.com/collections/shop-all)
- Icons - The relevant icons are taken from [Icon]()
- Fonts - IBM Plex Sans, font used throughout the website, is taken from [Google Fonts]()
- Animation - The animated truck was taken from [Lottie]() 
- Animation - The animated truck was taken from [Lottie]() 

### Acknowledgements
- [MEL]() - Reference on lesson materials and links.
- [W3 Schools]() - Reference on html, css and other content.
- [YouTube]() - Reference was taken for certain codes such as games.  
- [Stack Overflow]() - Reference on codes for specific content such as data validations for forms.


### Authors
- Lead Authors
    - Yee Jia Chen (Student)
    - Yong Zong Han Ryan (student) 

- Co-Author
    - Suresh Kumar Moorkath (lecturer)