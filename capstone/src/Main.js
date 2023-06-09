import Hero from './images/restauranfood.jpg'
import Greek_Salad from './images/greek salad.jpg'
import Bruchetta from "./images/bruschetta-2.jpg"
import Lemon_Dessert from './images/lemon dessert.jpg'

function Main() {
    return(
        <main>
            <div className="hero_container">
                <div className="left_container">
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                    <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</article>
                    <button>Reserve a Table</button>
                </div>
                    <img src={Hero} alt="restaurant food"/>
            </div>

            <div className='specials'>
                <div className='title_menu'>
                    <h2>Specials</h2>
                    <button className='online_menu'>Online Menu</button>
                </div>

                <div className='menu'>
                    <div className='card'>
                        <div className='menu_image'>
                            <img src={Greek_Salad} alt='greek salad'/>
                        </div>
                        <div className='card_content'>
                            <div className='name_price'>
                                <h2>Greek salad</h2>
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
                    <div className='menu_image'>
                        <img src={Bruchetta} alt='bruchetta'></img>
                    </div>
                        <div className='card_content'>
                        <div className='name_price'>
                                <h2>Bruchetta</h2>
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
                    <div className='menu_image'>
                        <img src={Lemon_Dessert} alt='lemon dessert'/>
                      </div>
                        <div className='card_content'>
                        <div className='name_price'>
                                <h2>Lemon Dessert</h2>
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

            <div className='restaurant_background'>
                    <div className='left_box'>
                        <h2>Little Lemon</h2>
                        <p>Chicago</p>
                        <article>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </article>
                    </div>

                    <div className='right_box'>
                        <img></img>
                        <img></img>
                    </div>
                </div>
        </main>
    )
}

export default Main