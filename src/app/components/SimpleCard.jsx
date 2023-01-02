import { Button, Card } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Navigate, useNavigate } from 'react-router-dom';

const CardRoot = styled(Card)(() => ({
  height: '100%',
  padding: '20px 24px',
}));

const CardTitle = styled('div')(({ subtitle }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
  marginBottom: !subtitle && '16px',
}));

const SimpleCard = ({ children, title, subtitle, icon, buttonTitle }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/lenders/addlender');
  };

  return (
    <CardRoot elevation={6}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <CardTitle subtitle={subtitle}>{title}</CardTitle>
        {buttonTitle && (
          <Button
            onClick={handleClick}
            style={{ background: '#B97983', color: 'white', cursor: 'pointer' }}
          >
            {buttonTitle}
          </Button>
        )}
      </Box>

      {subtitle && <Box sx={{ mb: 2 }}>{subtitle}</Box>}
      {children}
    </CardRoot>
  );
};

export default SimpleCard;
