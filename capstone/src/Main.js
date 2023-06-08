import Hero from './images/restauranfood.jpg'
import Greek_Salad from './images/greek salad.jpg'
import Bruchetta from "./images/bruschetta-2.jpg"
import Lemon_Dessert from './images/lemon dessert.jpg'

function Main() {
    return(
        <main>
            <div className="hero_container">
                <div className="left_container">
                    <div className='restaurant_title'>
                        <h2 className="restaurant_name">Little Lemon</h2>
                        <p className="restaurant_location">Chicago</p>
                    </div>
                    <article className="restaurant_intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</article>
                    <button className="reservation_button">Reserve a Table</button>
                </div>
                <div className="right_container">
                    {/* <img src={Hero} alt="restaurant food"/> */}
                </div>
            </div>

            <div className='specials'>
                <div className='title_menu'>
                    <div className='title_box'>
                        <h2>Specials</h2>
                    </div>
                    <button className='online_menu'>Online Menu</button>
                </div>

                <div className='menu'>
                    <div className='card'>
                        {/* <img src={Greek_Salad} alt='greek salad'/> */}
                        <div className='card_content'>
                            <div className='name_price'>
                                <div className='name_box'>
                                    <p>Greek salad</p>
                                </div>
                                <p className='price'>$12.99</p>
                            </div>

                            <div className='food_description'>
                                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                            </div>

                            <div className='order_link'>
                                <a href='#'>Order a delivery</a>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        {/* <img src={Bruchetta} alt='bruchetta'></img> */}
                        <div className='card_content'>
                        <div className='name_price'>
                                <div className='name_box'>
                                    <p>Bruchetta</p>
                                </div>
                                <p className='price'>$5.99</p>
                            </div>

                            <div className='food_description'>
                                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                            </div>

                            <div className='order_link'>
                                <a href='#'>Order a delivery</a>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={Lemon_Dessert} alt='lemon dessert'/>
                        <div className='card_content'>
                        <div className='name_price'>
                                <div className='name_box'>
                                    <p>Lemon Dessert</p>
                                </div>
                                <p className='price'>$5.00</p>
                            </div>

                            <div className='food_description'>
                                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            </div>

                            <div className='order_link'>
                                <a href='#'>Order a delivery</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main