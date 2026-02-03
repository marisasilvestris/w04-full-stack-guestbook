# w04-full-stack-guestbook

> emoji toolbox  
> 🐈‍⬛🟢🟠🔴

## Requirements checklist

🟢 Ensure your HTML form is working and submitting data into the database as expected.  
🟢 Confirm that your project is functional on multiple screen sizes using either Responsive Design or media queries.  
🟢 Create a working GET API route in your server.  
🟢 Create a working POST API route in your client.  
🟢 Seed your database with realistic-looking ‘dummy’ data through the Supabase query editor or a seed file in your server. Ensure that this is saved and submitted (in a screenshot or seed file form) so it can be marked and tested efficiently.

### Stretch requirements

🔴 Provide additional functionality on the form, for example, by adding form validation or other options.  
🟢 Style the page excellently, for example, by adding extra UX considerations or animations.  
🔴 Add a delete button to each message and a DELETE route in the server. (i overthought this one and assumed i'd want to add some sort of user log-in functionality, so i panicked and gave up)  
🔴 Create an option for users to like others’ posts. (i did not know how to approach this sensibly, wanted to add a way to log-in and everything)

## Reflection

> tl;dr there are 206 bones in the human body and any one of them could be evil

Boy, I really gotta start reining it in at some point, huh?

I think that might genuinely be all I have to say about this one. I was lucky, very lucky, that I managed to get the server/client stuff set up quite quickly and easily, a minor stumble here and there with an .env issue and not quite following the logic sometimes. Tbh there's still a lot I don't understand, as far as more complex behaviours go.

Ya might've guessed it, but it's the bells and whistles I got carried away with. Figured if I was going to parody a Steam product page I might as well make it look good.

As always, comments in the code.

### Thanks to/image credits

thanks, as always, to MDN.

handy little css arrows trick courtesy of <a href="https://www.tutorialspoint.com/css/css_arrows.htm">tutorialspoint</a>

Photo by <a href="https://unsplash.com/@cadop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mathew Schwartz</a> on <a href="https://unsplash.com/photos/greyscale-photography-of-skeleton-8rj4sz9YLCI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>  
Photo by <a href="https://unsplash.com/@sabinamusicrich?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sabina Music Rich</a> on <a href="https://unsplash.com/photos/grayscale-photo-of-person-wearing-mask-OJy0JHnoUZQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>  
Photo by <a href="https://unsplash.com/@bharath9110?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bharath Kumar</a> on <a href="https://unsplash.com/photos/a-skeleton-with-a-crown-on-its-head-PSYTLQczflY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>  
Photo by <a href="https://unsplash.com/@dada_design?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">dada_design</a> on <a href="https://unsplash.com/photos/a-skeleton-laying-on-its-back-on-a-pink-surface-RpP6NZcdhUY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>  
Photo by <a href="https://unsplash.com/@shionadas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shiona Das</a> on <a href="https://unsplash.com/photos/a-white-skull-sitting-next-to-a-tree-z6aqZJ9upJM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>  
Photo by <a href="https://unsplash.com/@vixenly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kym MacKinnon</a> on <a href="https://unsplash.com/photos/a-skeleton-hanging-from-a-tree-with-blue-hair-eQqcz7NWyH4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>  
Photo by <a href="https://unsplash.com/@notafraid?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Paul Cuoco</a> on <a href="https://unsplash.com/photos/green-and-black-dragon-figurine-JZOyQluj8eY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>  
Photo by <a href="https://unsplash.com/@dtrinksrph?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Trinks</a> on <a href="https://unsplash.com/photos/a-skeleton-with-wide-blue-eyes-and-open-mouth-LJWdsZjhtSI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

## To improve

Time management  
Ambition management  
Focus management  
Even if it's for nobody by that point, I still intend to write some BS marketing spiel for skeleton puncher xiv

## bügz:

"name:" label and text field stack when on narrow viewports because of the half-assed method of mobile-ifying it
slider thumbnails overflow container

marisa 🐈‍⬛
