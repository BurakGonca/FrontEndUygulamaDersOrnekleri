import React from "react";
import "../assets/style/about.scss";
import Foto from '../assets/img/logo.png'

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Welcome to the Recipe Sharing Platform, where culinary creativity meets
        community. Our mission is to bring together food enthusiasts from all
        over the world, offering a space to share recipes, discover new dishes,
        and connect with like-minded individuals.
      </p>

      <h2>Our Story</h2>
      <p>
        The Recipe Sharing Platform was founded by passionate home cooks and
        professional chefs who believe that the joy of cooking should be shared.
        We started this platform to create a hub where people can exchange
        ideas, inspire each other, and explore the endless possibilities of
        gastronomy.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>
          <strong>Diverse Recipes:</strong> From traditional family recipes to
          innovative modern dishes, our platform hosts a wide range of culinary
          delights.
        </li>
        <li>
          <strong>Community Interaction:</strong> Engage with other users
          through comments, likes, and recipe shares.
        </li>
        <li>
          <strong>Personal Recipe Book:</strong> Save your favorite recipes and
          create your own collection.
        </li>
        <li>
          <strong>Cooking Tips and Tricks:</strong> Learn new techniques and get
          expert advice from our seasoned contributors.
        </li>
      </ul>
      <div className="foto-class">
        <img src={Foto} alt="" />
        <h2>Recipe Sharing Platform</h2>
      </div>
    </div>
  );
};

export default About;
