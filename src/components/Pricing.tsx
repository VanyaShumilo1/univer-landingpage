import {
  AccessTime,
  Business,
  CardMembership,
  EmojiEvents,
  LocalOffer,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const Pricing: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pricingCategories = [
    {
      title: "По часу",
      icon: <AccessTime />,
      color: "primary.main",
      items: [
        { duration: "30 хвилин", price: "180 грн" },
        { duration: "1 година", price: "250 грн" },
      ],
    },
    {
      title: "Для компаній",
      subtitle: "(всі місця одночасно)",
      icon: <Business />,
      color: "secondary.main",
      items: [
        { duration: "30 хв (оренда всіх симуляторів)", price: "480 грн" },
        { duration: "1 година (оренда всіх симуляторів)", price: "800 грн" },
      ],
    },
    {
      title: "Абонементи / пакети",
      icon: <CardMembership />,
      color: "success.main",
      items: [
        {
          duration: "5 годин (можна ділити на декілька днів)",
          price: "1200 грн",
        },
        { duration: "10 годин", price: "2200 грн" },
        { duration: "Студентська знижка", price: "-10%" },
      ],
      isPopular: true,
    },
    {
      title: "Турніри та івенти",
      icon: <EmojiEvents />,
      color: "warning.main",
      items: [
        {
          duration: "Участь у турнірі (30–60 хв + рейтингова таблиця)",
          price: "300 грн з людини",
        },
        { duration: "Призовий фонд формується з внесків", price: "" },
      ],
    },
    {
      title: "Бонуси для клієнтів",
      icon: <LocalOffer />,
      color: "info.main",
      items: [
        { duration: "День народження", price: "30 хв безкоштовно" },
        { duration: "Привів друга", price: "-20% на наступний сеанс" },
        {
          duration: "Вечірній тариф (після 20:00)",
          price: "дешевше на 10–15%",
        },
      ],
    },
  ];

  return (
    <Box
      id="pricing"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
          mx: "auto",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              mb: 2,
              color: "white",
            }}
          >
            Прайс-лист
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 8,
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Оберіть зручний для вас тариф та насолоджуйтесь гонками
          </Typography>
        </motion.div>

        {/* Pricing Categories */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {pricingCategories.map((category, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "400px", // Фіксована висота для всіх карточок
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: category.isPopular
                      ? "rgba(0, 255, 255, 0.1)"
                      : "background.paper",
                    border: category.isPopular
                      ? "2px solid #00ffff"
                      : "1px solid rgba(0, 255, 255, 0.2)",
                    position: "relative",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      transition: "transform 0.3s ease",
                    },
                  }}
                >
                  {category.isPopular && (
                    <Chip
                      label="Популярний"
                      color="primary"
                      sx={{
                        position: "absolute",
                        top: 10,
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 1,
                      }}
                    />
                  )}

                  <CardContent
                    sx={{
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ textAlign: "center", mb: 3 }}>
                      <Box
                        sx={{
                          color: category.color,
                          fontSize: "2.5rem",
                          mb: 1,
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{ mb: 0.5, fontWeight: 600 }}
                      >
                        {category.title}
                      </Typography>
                      {category.subtitle && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 2 }}
                        >
                          {category.subtitle}
                        </Typography>
                      )}
                    </Box>

                    <List
                      sx={{
                        p: 0,
                        flex: 1,
                        overflow: "auto",
                        maxHeight: "200px",
                      }}
                    >
                      {category.items.map((item, itemIndex) => (
                        <ListItem
                          key={itemIndex}
                          sx={{
                            px: 0,
                            py: 0.5, // Зменшені відступи
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "100%",
                              alignItems: "flex-start",
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                flex: 1,
                                color: "text.primary",
                                lineHeight: 1.4,
                              }}
                            >
                              {item.duration}
                            </Typography>
                            {item.price && (
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 600,
                                  color: category.color,
                                  ml: 2,
                                  minWidth: "fit-content",
                                }}
                              >
                                {item.price}
                              </Typography>
                            )}
                          </Box>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              textAlign: "center",
              backgroundColor: "rgba(0, 255, 255, 0.1)",
              borderRadius: 3,
              p: 4,
              border: "1px solid rgba(0, 255, 255, 0.2)",
            }}
          >
            <Typography
              variant="h4"
              sx={{ mb: 2, fontWeight: 600, color: "white" }}
            >
              Готові почати?
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3, maxWidth: "600px", mx: "auto" }}
            >
              Оберіть зручний для вас тариф і забронюйте сеанс у нашому клубі
              автосимуляторів
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => scrollToSection("booking")}
              sx={{
                py: 1.5,
                px: 4,
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: 2,
              }}
            >
              Забронювати сеанс
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Pricing;
