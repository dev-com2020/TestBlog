import React from 'react';

const ShareButtons = () => {
    const twitterShare = `https://twitter.com/intent/tweet?url=${test}`;
    const test = 'localhost.pl/mobile/samsung';
    return (
        <>
            <a href="https://www.facebook.com/sharer/sharer.php?u=localhost.pl/mobile" target="_blank">
                Share on Facebook</a>
            <a class="twitter-share-button"
                href={twitterShare}
                data-size="large">
                Tweet</a>
        </>
    );
}

export default ShareButtons;