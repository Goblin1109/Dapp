import React from "react";
import { Box, Container, Stack, Paper, Typography, Button } from "@mui/material";
import { styled } from '@mui/system';
import SwipeButton from '../../components/Button/SwipeButton';
import BalanceCard from '../../components/BalanceCard';
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../utils/pageTransitions"
import HeaderBar from "../../components/HeaderBar";
import PartiesList from "../../components/PartiesList";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const RootBox = styled(Box)`
  padding: '10px'
`;

const WrapBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary_blue,
  color: theme.palette.white,
  borderRadius: '12px',
  padding: "16px 24px",
  fontFamily: "Montserrat Alternative",
  fontWeight: "800",
  lineHeight: "40px",
  fontSize: "25px"
}));

const ContentPaper = styled(Paper)(({ theme }) => ({
  boxShadow: '0px 20px 46px rgba(0, 0, 0, 0.1)',
  borderRadius: '16px',
  padding: "14px 17px"
}));

const WrapTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary_gray,
  fontWeight: 800,
  fontSize: '18px'
}));

const ContentHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '16px'
}));

const Dashboard = (props) => {
  const history = useHistory()
  const partyList = useSelector(state => state.app.partyList)
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <RootBox>
        <Stack spacing={2}>
          <HeaderBar />
          <BalanceCard />
          <WrapBox>THIS WEEK WIN BIG</WrapBox>
          <ContentPaper>
            <ContentHeader>
              <WrapTypography variant="sm_title">
                Your parites
              </WrapTypography>
              <Typography variant="sm_content" style={{cursor:"pointer"}} onClick={() => history.push('/private-party')}>See all</Typography>
            </ContentHeader>
            <PartiesList list={partyList} />
          </ContentPaper>
        </Stack>
      </RootBox>
    </motion.div>
  );
}

export default Dashboard;