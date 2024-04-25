import CardFront from '../../assets/00_Cursed_Fool.jpg';

const JournalLeft = () => {
    return (
        <section style={ { width: '50%', height: '80%', display: 'flex', justifyContent: 'center' } }>
            <section style={ { width: '65%', textAlign: 'center', padding: '20px' } }>
                <div style={ { textAlign: 'center' } }>
                    <h2>User Note Title</h2>
                    <hr />
                    <h3>Eclipse of the Soul</h3>
                    <hr style={ { width: '75%' } } />
                </div>
                <h3 style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 'auto', width: '90%', height: '2.5rem' } }>
                    <p>Deck Interview</p>
                    <div>04/17/2024</div>
                </h3>
                <hr />

                <div style={ { textAlign: 'justify', margin: '3rem auto', border: '1px solid grey', padding: '10px', width: '95%', maxHeight: '200px', overflowY: 'scroll', overflowX: 'hidden' } }>
                <p>Today was my first time working with the Eclipse of the Soul Tarot Deck, and I decided to do a deck interview spread to understand how we might work together. The spread revealed a lot more than I expected, and I feel a deep connection with this deck already.</p>
                <p>After this reading, I feel a profound sense of anticipation and curiosity. This deck appears to be straightforward and honest, capable of guiding significant personal transformations. It seems like it will be an excellent companion for my spiritual journey and personal development. I look forward to exploring with the deck and uncovering the insights it holds. The spread not only introduced the deck's capabilities but also set the tone for what I can expect in future readings.</p>
                </div>
                <img src={ CardFront } style={ { width: '50px', margin: '10px' } } />
                <img src={ CardFront } style={ { width: '60px', margin: '15px 10px 15px 15px', border: '4px solid darkslategrey', boxShadow: '-15px 15px #111111' } } />
                <img src={ CardFront } style={ { width: '50px', margin: '10px' } } />
                <img src={ CardFront } style={ { width: '50px', margin: '10px' } } />
                <img src={ CardFront } style={ { width: '50px', margin: '10px' } } />
                <img src={ CardFront } style={ { width: '50px', margin: '10px' } } />
            </section>

        </section>
    );
};

export default JournalLeft;
