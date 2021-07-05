import React from 'react';
import web1 from '../images/web1.png';
import web2 from '../images/web2.png';
import web3 from '../images/web3.svg';
import web5 from '../images/web5.svg';
import web6 from '../images/web6.png';
import web7 from '../images/web7.png';
import web8 from '../images/web8.png';
import web9 from '../images/WEB9.png';
import web10 from '../images/web10.png';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* HERO SECTION  */}
            <section className="main_hero_section">
                {/* LEFT SIDE CODE */}
                <div className="hero_left_side">
                    <h1>Healthy living simplified</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Ex accusamus eligendi deleniti eum? Officiis, animi rerum, sint sit numquam tempore aut sunt explicabo accusamus voluptates fuga? Fugit tenetur labore qui.</p>
                    <div className="button_group">
                        <NavLink to="#">
                            <img src={web1} alt="NOT FOUND" className="appStore" />
                        </NavLink>
                        <NavLink to="#">
                            <img src={web2} alt="NOT FOUND" />
                        </NavLink>
                    </div>
                </div>
                {/* RIGHT SIDE CODE */}
                <div className="hero_right_side">


                    <img src={web3} alt="NOT FOUND" />

                </div>


            </section>
            {/* ======================Second Section====================== */}
            <section className="common_section">
                <div className="left_side">
                    <figure>
                        <img src={web5} alt="Not Found" />
                    </figure>
                </div>
                <div className="right_side">
                    <h2>Your Daily Health App</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi, fugit aperiam. Quod possimus veritatis aperiam,
                        deleniti officia animi nesciunt, pariatur inventore labore molestiae ut sunt excepturi? Vitae,
                        alias? Quod, dolorem?</p>
                    <div className="button_group">
                        <button className="common_button">Get Started</button>
                        <button className="common_button_normal">How it works</button>
                    </div>

                </div>

            </section>
            {/* ----------------------------THIRD SECTION-------------------------------------------------- */}
            <section className="third_section" id="section_third">
                <h2>
                    The Tools For Your Goals
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempore illum exercitationem,
                    expedita quis non error nisi magnam velit eum soluta nemo odio est neque sunt,
                    explicabo perspiciatis consequuntur cum!</p>
                <div className="third_section_task">
                    <div className="task_1">
                        <img src={web6} alt="NOT FOUND"  />
                        <h3>Learn and improve</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat iure,
                            odit mollitia enim dolor dolorem dolorum dolor.</p>

                    </div>
                    <div className="task_2">
                        <img src={web7} alt="NOT FOUND"  />
                        <h3>Learn and improve</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat iure,
                            odit mollitia enim dolor dolorem dolorum dolor.</p>

                    </div>
                    <div className="task_3">
                        <img src={web8} alt="NOT FOUND"  />
                        <h3>Learn and improve</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat iure,
                            odit mollitia enim dolor dolorem dolorum dolor.</p>

                    </div>
                </div>
            </section>
            {/* ----------------------------FOURTH SECTION-------------------------------------------------- */}
            <section className="common_section" id="section_four">
                <div className="right_side">
                    <h2>Create Your Fitness Journey</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi, fugit aperiam. Quod possimus veritatis aperiam,
                        deleniti officia animi nesciunt, pariatur inventore labore molestiae ut sunt excepturi? Vitae,
                        alias? Quod, dolorem?</p>
                    <div className="button_group">
                        <button className="common_button">Get Started</button>
                        <button className="common_button_normal">How it works</button>
                    </div>

                </div>
                <div className="left_side">
                    <figure>
                        <img src={web9} alt="Not Found" />
                    </figure>
                </div>

            </section>
            {/* ----------------------------FIFTH SECTION-------------------------------------------------- */}
            <section className="common_section" id="section_fifth">
                <div className="left_side">
                    <figure>
                        <img src={web10} alt="Not Found" />
                    </figure>
                </div>
                <div className="right_side">
                    <h2>We will take care of your fitness goal</h2>
                    <div className="fitness_goal">
                        <div className="rule_1">
                            <h3>
                            <FavoriteIcon className="fav1"/>  
                            &nbsp;We wil take care of your fitness goals
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Enim temporibus fuga inventore.  
                            </p>
                        </div>
                        <div className="rule_2">
                            <h3>
                            <FavoriteIcon className="fav1"/> 
                            &nbsp;Track your daily habits withh water
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Enim, temporibus fuga inventore. 
                            </p>
                        </div>
                        <div className="rule_3">
                            <h3>
                            <FavoriteIcon className="fav1"/> 
                            &nbsp;Track your waist and water
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Enim, temporibus fuga inventore. 
                            </p>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}
export default Home;
