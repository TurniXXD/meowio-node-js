INSERT INTO
    public."User" (
        "createdAt",
        "updatedAt",
        id,
        "avatarId",
        "firstName",
        "lastName",
        email,
        "password",
        role
    )
VALUES (
        '2023-07-26 21:41:38.979354',
        '2023-07-26 21:41:38.979354',
        'db30aee5-8cba-4694-898c-dea560c39bb3',
        'avatar-5',
        'Jan',
        'Bořek',
        'smart@guy.dev',
        '$argon2id$v=19$m=65536,t=3,p=4$x+mrAwkNqqRuyMa8l4p3Ug$8zvAc1OtXsxyu6WTRN6ZIN+db2sy+u1diP2lXO+sDe0',
        'user'
    ), (
        '2023-07-26 21:43:25.208599',
        '2023-07-26 21:43:25.208599',
        'e205098c-7875-4599-a7d8-d15912dca91d',
        'avatar-2',
        'Jan',
        'Novák',
        'not_that_smart@guy.dev',
        '$argon2id$v=19$m=65536,t=3,p=4$l7jophZugXiGABXFlvrOpQ$J+sG+QbUx+i0rkJGlOmtgonQSBRTdXY5lJXyXjjIDVY',
        'admin'
    );

INSERT INTO
    public."Article" (
        "createdAt",
        "updatedAt",
        id,
        "ownerId",
        "imageId",
        title,
        perex,
        "content"
    )
VALUES (
        '2023-07-26 22:00:39.071996',
        '2023-07-26 22:00:39.071996',
        '7a0bb112-83dc-4ddf-8f69-31869b38b76d',
        'e205098c-7875-4599-a7d8-d15912dca91d',
        'splash1',
        'I love cats',
        'Cats are very nice and everyone should have them',
        'I love cats

My favorite things about cats
- They are awesome
- They are cute
- They are beautiful

[look at this](https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg)'
    ), (
        '2023-07-26 22:24:24.896665',
        '2023-07-26 22:24:24.896665',
        'f360d779-5c96-4d48-8fec-56bb17455435',
        'e205098c-7875-4599-a7d8-d15912dca91d',
        'splash2',
        'Cats not dogs',
        'Choose your animal carefully',
        '# What animal is the best
## 1. The Independent Elegance of Cats:

Choosing between cats and dogs as pets is a decision that depends on individual preferences and lifestyle. Cats are known for their independence and self-sufficiency, making them ideal for people with busy schedules or limited living space. They are graceful and curious creatures, skilled at keeping homes free of pests.

## 2. The Loyal Devotion of Dogs:

On the other hand, dogs offer unwavering loyalty and affection, making them perfect companions for those seeking constant companionship and a social, active lifestyle. Dogs thrive on human interaction and can be great protectors and helpers.

# Conclusion:

Consider your lifestyle, the amount of time you can dedicate to a pet, and any potential allergies in your household before making the choice. Spending time with both cats and dogs before adopting can help you decide which pet''s qualities align better with your preferences and needs. Whether you choose a cat or a dog, both animals can bring joy, love, and companionship into your life, making them cherished members of your family.'
    );