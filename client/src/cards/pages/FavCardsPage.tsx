import React from 'react'
import { useCallback } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import CardsFeedback from "../components/CardsFeedback";
import useCards from '../hooks/useCards';

const FavCardsPage = () => {
    const { value, ...rest } = useCards();
  const { isLoading, error, cards } = value;
  const { handleDeleteCard, handleGetFavCards } = rest;
  useEffect(() => {
    handleGetFavCards();
  }, []);
  const onDeleteCard = useCallback(
    async (cardId:string) => {
      await handleDeleteCard(cardId);
      await handleGetFavCards();
    },
    [handleDeleteCard]
  );

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavCards();
  }, []);


  return (
 <Container>
   <PageHeader 
   title='Favoritr Cards Page'
   subtitle="Here you can find all your favorite business cards"
/> 
<CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
        onLike={changeLikeStatus}
      />
 </Container>
  )
}

export default FavCardsPage