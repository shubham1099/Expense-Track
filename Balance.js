import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  balance: {
    balance: {
      fontSize: 25,
      marginBottom: 20,
    },
  },
});

const Balance = ({ transactions }) => {
  const classes = useStyle();
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);
  return (
    <Box>
      <Typography className={classes.balance}>Balance ₹{total}</Typography>
    </Box>
  );
};

export default Balance;
