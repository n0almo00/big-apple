export default function Main() {
    return (
    <main>
        <header>
            <div className="banner">
                <div className="title">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                </div>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <a>Reserve a Table</a>
            </div>
            
            <img src="images/restauranfood.jpg" alt="hero photo" />
        </header>
        <section className="specials">
            <div className="specials-top">
                <h2>This Week's Specials!</h2>
                <a>Online Menu</a>
            </div>
            <div className="specials-mid">
                <div className="special">
                     <img src="images/greek salad.jpg" alt="salad" width={'300px'}/>
                    <div className="card-content">
                        <div className="card-row">
                        <h3>Greek salad</h3><span>5.99€</span>
                        </div>
                        <p className="description">Savor the taste of Italy with our classic Bruschetta. Freshly toasted bread topped with a vibrant mix of ripe tomatoes, garlic, basil, and a drizzle of balsamic glaze. It's a delightful appetizer that bursts with flavor in every bite.</p>
                        <p>Order a delivery</p>
                    </div>
                </div>
                <div className="special">
                    <img src="images/bruschetta.webp" alt="salad" width={'300px'}/>
                    <div className="card-content">
                        <div className="card-row">
                        <h3>Bruschetta</h3><span>5.99€</span>
                        </div>
                        <p className="description">Savor the taste of Italy with our classic Bruschetta. Freshly toasted bread topped with a vibrant mix of ripe tomatoes, garlic, basil, and a drizzle of balsamic glaze. It's a delightful appetizer that bursts with flavor in every bite.</p>
                        <p>Order a delivery</p>
                    </div>
                </div>
                <div className="special">
                     <img src="images/lemon.jpg" alt="salad" width={'300px'}/>
                    <div className="card-content">
                        <div className="card-row">
                        <h3>Lemon desert</h3><span>5.99€</span>
                        </div>
                        <p className="description">Savor the taste of Italy with our classic Bruschetta. Freshly toasted bread topped with a vibrant mix of ripe tomatoes, garlic, basil, and a drizzle of balsamic glaze. It's a delightful appetizer that bursts with flavor in every bite.</p>
                        <p>Order a delivery</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="testimonials">
            <h2 style={{textAlign:'center'}}>Testimonials</h2>
           <div className="reviews">
             <div className="review">
                <h3>Rating: 5/5⭐</h3>
                <img src="images/p1.jpg" alt="reviewer"  width={'50px'}/>
                <figcaption>Anna K</figcaption>
                <p>"A fantastic dining experience! The ambiance is cozy, and the food is consistently delicious. Highly recommend!"</p>
            </div>
             <div className="review">
                <h3>Rating: 5/5⭐</h3>
                <img src="images/p2.jpg" alt="reviewer"  width={'50px'}/>
                <figcaption>Rob S</figcaption>
                <p>"A fantastic dining experience! The ambiance is cozy, and the food is consistently delicious. Highly recommend!"</p>
            </div>
             <div className="review">
                <h3>Rating: 5/5⭐</h3>
                <img src="images/p3.jpg" alt="reviewer"  width={'50px'}/>
                <figcaption>Jalal K</figcaption>
                <p>"A fantastic dining experience! The ambiance is cozy, and the food is consistently delicious. Highly recommend!"</p>
            </div>
             <div className="review">
                <h3>Rating: 5/5⭐</h3>
                <img src="images/p1.jpg" alt="reviewer"  width={'50px'}/>
                <figcaption>Anna K</figcaption>
                <p>"A fantastic dining experience! The ambiance is cozy, and the food is consistently delicious. Highly recommend!"</p>
            </div>
           </div>

        </section>
        <section className="about">
            <div className="about-text">
                <div className="about-title">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                </div>
                <p>Savor the taste of Italy with our classic Bruschetta. Freshly toasted bread topped with a vibrant mix of ripe tomatoes, garlic, basil, and a drizzle of balsamic glaze. It's a delightful appetizer that bursts with flavor in every bite.</p>
            </div>
            <div className="about-pics">
                <img className="front" src="images/mab.jpg" alt="" />
                <img className="back" src="images/restaurant.jpg" alt="" />
            </div>     
            </section>
    </main>
)
}