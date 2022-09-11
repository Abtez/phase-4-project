# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(username: 'Abzed', password_digest: '12345', avatar: 'https://res.cloudinary.com/abzed/image/upload/v1658123480/azagfvxpgtszyuqafdr0.jpg', bio: 'Tetman walking...')
user2 = User.create(username: 'Dee', password_digest: 'dee', avatar: 'https://res.cloudinary.com/abzed/image/upload/v1658123480/azagfvxpgtszyuqafdr0.jpg', bio: 'Dee the sponsor...')


prod1 = Product.create(title: "Colored shirt", description: "rainbow shirts", image: "https://res.cloudinary.com/abzed/image/upload/v1643063712/jbwii0icqbsogdlswmow.jpg", category: "Clothes", price: 150, user_id: user1.id)
prod2 = Product.create(title: "Flower pot", description: "best quality flower pots", image: "https://res.cloudinary.com/abzed/image/upload/v1643064169/dyncpok6sttoeyf0tqpx.jpg", category: "Plants", price: 50, user_id: user2.id)

Review.create(title: "Good", description: "This is really good", rating: 4, product_id: prod1.id, user_id: user2.id)
Review.create(title: "Bad qualiry", description: "breaks really easily", rating: 2, product_id: prod2.id, user_id: user1.id)










