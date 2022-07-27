import React from 'react'

export default function Trucks(props) {

    const { id, marca, desc, price, priceDiscount, currency, imageUrl, href, discount, cor } = props.truck;

    return (
        <>
            <article className="skateboardArticle">
                <span id="discount">{discount}</span>
                <a href><img className="skateboardImage" src={imageUrl} alt="skateboard" data-id={id} /></a>
                <h1 className="products-brand">{marca}</h1>
                <h2 className="products-desc">{desc}</h2>
                <section className="prices">
                    <p className="priceofprod">{price}</p>
                    <p className="discountPrice">{priceDiscount}</p>
                    <p className="currency">{currency}</p>
                </section>
                {/* <img className="productCloseBtn" src="Media/icons/close_btn_sm.png" alt="close button" data-id="${skateboard.id}" /> */}
                <img className="reviews" src="Media/icons/reviews_stars.png" alt="reviews" />
            </article>
        </>


    )
}



