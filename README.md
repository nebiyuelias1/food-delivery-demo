# food-delivery-demo
Food delivery demo app.

## You need the following to run the project:
* Docker
* NPM
* Angular CLI

## How to run this project
1. Clone the repo on your machine, then navigate to the cloned director using the command `cd food-delivery-demo`
2. Build the docker image using: `docker-compose build`
3. After the image is built, run the following command: `docker-compose up`
4. Open another terminal window while the docker container is running and run the following command to run migrations: `docker-compose exec web python backend/manage.py migrate`. But make sure you're inside the `food-delivery-demo` directory.
5. Now open the following url: [admin url](http://localhost:8000/admin). You should see the following in your browser:
![localhost_8000_admin_login__next=_admin_](https://user-images.githubusercontent.com/25957442/159137883-ba67b8aa-d4c4-46d4-9fe8-c07d22ad5345.png)
6. Use the following login credential to login into the site:
* username: **admin**
* password: **testpassword**
7. Click the green plus icon right next to the **Restaurants** link
![image](https://user-images.githubusercontent.com/25957442/159137984-3f5ce0b1-cd97-477f-96cd-be129f744b11.png)
8. Fill out the form for and click on save. You will need to adjust the map to pinpoint the exact place of the restaurant, i.e., geo location.
9. (Optional) Repeat steps 7-8 to add more restaurants.
10. Now, it's time to run the angular front end project, so open another terminal window and navigate to **food-delivery-web** using `cd food-delivery-web`
11. Then run the project using: `ng serve`
12. After that open this [link](http:localhost:4200) on your browser.
13. You should get the following popup:
![Screenshot from 2022-03-19 23-56-02](https://user-images.githubusercontent.com/25957442/159138166-ad12892d-b882-4f16-a147-8e6a4bddc24b.png)
14. Click "Allow" to access user's location
15. You should see nearby restaurant and after clicking the restaurant you'll be shown the detail.
