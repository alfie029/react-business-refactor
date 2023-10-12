import React from "react";

const globalNumberFormat = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

// @ts-ignore
const Container = ({children}) => (<div>{children}</div>);

// @ts-ignore
const Text = ({children, style}: { children: any, style?: any }) => (<div style={style}>{children}</div>);

// @ts-ignore
const Button = ({children, onClick}: { children: any, onClick?: any }) => (
    <button onClick={onClick}>{children}</button>
);

const Name = ({value: name}: { value: String }) => (
    <Text style={{fontSize: 36, marginTop: 10}}>{name}</Text>
);

const Author = ({value: author}: { value: String }) => (
    <Text style={{fontSize: 20, marginTop: 15}}>{author}</Text>
);

// @ts-ignore
const Price = ({value: price}: { value?: number }) => (
    <Text style={{fontSize: 24, marginTop: 10}}>{globalNumberFormat.format(price || 0)}</Text>
);

export {
    Container,
    Text,
    Button,
    Name,
    Author,
    Price
}
