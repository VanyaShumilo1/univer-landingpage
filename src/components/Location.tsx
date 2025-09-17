import {
  AccessTime,
  DirectionsCar,
  DirectionsTransit,
  LocalCafe,
  LocalParking,
  LocationOn,
  Restaurant,
  Wifi,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const Location: React.FC = () => {
  const openMap = () => {
    window.open(
      "https://maps.google.com/?q=Легоцького+80,+Ужгород,+Закарпатська+область",
      "_blank"
    );
  };

  const locationFeatures = [
    { icon: <LocalParking />, text: "Безкоштовна парковка" },
    { icon: <Wifi />, text: "Безкоштовний Wi-Fi" },
    { icon: <Restaurant />, text: "Кафе та ресторан" },
    { icon: <LocalCafe />, text: "Кавовий куточок" },
  ];

  const workingHours = [
    { day: "Понеділок - Неділя", time: "11:00 - 01:00" },
    { day: "Свята", time: "11:00 - 23:00" },
  ];

  const transportOptions = [
    {
      icon: <DirectionsTransit />,
      title: "Громадський транспорт",
      description: "Автобуси та маршрутки до ЖК Parkland",
      details: "Автобуси: 8, 15, маршрутка 102",
    },
    {
      icon: <DirectionsCar />,
      title: "На автомобілі",
      description: "Зручний під'їзд з центру міста",
      details: "GPS: Легоцького 80, Ужгород",
    },
  ];

  return (
    <Box
      id="location"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)",
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
            Наша локація
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
            Знайдіть нас у житловому комплексі Parkland в Ужгороді
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Main Location Card */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  backgroundColor: "background.paper",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ p: 4, flex: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <LocationOn
                      sx={{ color: "primary.main", fontSize: "2rem", mr: 2 }}
                    />
                    <Typography variant="h4" sx={{ color: "primary.main" }}>
                      Адреса
                    </Typography>
                  </Box>

                  <Typography variant="h6" sx={{ mb: 2 }}>
                    ЖК Parkland, Легоцького 80
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ mb: 4, color: "text.secondary" }}
                  >
                    Ужгород, Закарпатська область, Україна
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mb: 4, lineHeight: 1.7, color: "text.secondary" }}
                  >
                    Ми розташовані в сучасному житловому комплексі Parkland в
                    Ужгороді. Зручне розташування та легкий доступ для всіх
                    любителів автосимуляторів у Закарпатській області.
                  </Typography>

                  <Button
                    variant="contained"
                    size="large"
                    onClick={openMap}
                    startIcon={<LocationOn />}
                    fullWidth
                    sx={{ py: 1.5 }}
                  >
                    Відкрити на карті
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Map Placeholder */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  backgroundColor: "background.paper",
                  height: { xs: 300, md: "100%" },
                  minHeight: 400,
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.1752882139456!2d22.299542476213844!3d48.61956907131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473966cbcdf4067d%3A0x5bc5c007ed27aaad!2sЛегоцького%2080%2C%20Ужгород%2C%20Закарпатська%20область%2C%2088000!5e0!3m2!1suk!2sua!4v1704066000000!5m2!1suk!2sua"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="F1 Club Location"
                ></iframe>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Transport and Working Hours - New Design */}
        <Box sx={{ mt: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              align="center"
              sx={{ mb: 6, color: "white" }}
            >
              Корисна інформація
            </Typography>
          </motion.div>

          <Grid container spacing={6}>
            {/* Transport - Redesigned */}
            <Grid size={{ xs: 12, lg: 7 }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(26, 26, 26, 0.9) 100%)",
                    border: "1px solid rgba(0, 255, 255, 0.3)",
                    borderRadius: 3,
                    p: 4,
                    height: "100%",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        background:
                          "linear-gradient(45deg, #00ffff 30%, #66ffff 90%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 3,
                      }}
                    >
                      <DirectionsCar
                        sx={{ color: "white", fontSize: "1.8rem" }}
                      />
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{ color: "white", fontWeight: 600 }}
                    >
                      Як дістатися
                    </Typography>
                  </Box>

                  <Grid container spacing={3}>
                    {transportOptions.map((option, index) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        >
                          <Box
                            sx={{
                              p: 3,
                              backgroundColor: "rgba(255, 255, 255, 0.05)",
                              borderRadius: 2,
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              height: "100%",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                backgroundColor: "rgba(0, 255, 255, 0.1)",
                                borderColor: "rgba(0, 255, 255, 0.5)",
                                transform: "translateY(-2px)",
                              },
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  color: "primary.main",
                                  mr: 2,
                                  fontSize: "1.5rem",
                                }}
                              >
                                {option.icon}
                              </Box>
                              <Typography
                                variant="h6"
                                sx={{ color: "white", fontWeight: 600 }}
                              >
                                {option.title}
                              </Typography>
                            </Box>
                            <Typography
                              variant="body1"
                              sx={{
                                mb: 1,
                                color: "text.secondary",
                                lineHeight: 1.6,
                              }}
                            >
                              {option.description}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: "primary.main", fontWeight: 500 }}
                            >
                              {option.details}
                            </Typography>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            </Grid>

            {/* Working Hours - Redesigned */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(0, 255, 255, 0.1) 100%)",
                    border: "1px solid rgba(0, 255, 255, 0.3)",
                    borderRadius: 3,
                    p: 4,
                    height: "100%",
                    textAlign: "center",
                  }}
                >
                  <Box sx={{ mb: 4 }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        background:
                          "linear-gradient(45deg, #00ffff 30%, #66ffff 90%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 3,
                      }}
                    >
                      <AccessTime sx={{ color: "white", fontSize: "2.5rem" }} />
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{ color: "white", fontWeight: 600 }}
                    >
                      Режим роботи
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: "left" }}>
                    {workingHours.map((schedule, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            p: 3,
                            mb: 2,
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            borderRadius: 2,
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              backgroundColor: "rgba(0, 255, 255, 0.1)",
                              borderColor: "rgba(0, 255, 255, 0.5)",
                            },
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{ color: "text.secondary", fontWeight: 500 }}
                          >
                            {schedule.day}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{ color: "primary.main", fontWeight: 700 }}
                          >
                            {schedule.time}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      mt: 4,
                      p: 3,
                      backgroundColor: "rgba(0, 255, 255, 0.1)",
                      borderRadius: 2,
                      border: "2px solid rgba(0, 255, 255, 0.3)",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      💡 Рекомендуємо бронювати місця заздалегідь!
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        {/* Location Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            sx={{ mt: 8, mb: 4, color: "white", textAlign: "center" }}
          >
            Зручності
          </Typography>

          <Grid container spacing={3}>
            {locationFeatures.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      backgroundColor: "rgba(26, 26, 26, 0.8)",
                      border: "1px solid rgba(0, 255, 255, 0.2)",
                      textAlign: "center",
                      "&:hover": {
                        borderColor: "primary.main",
                        transform: "translateY(-4px)",
                        transition: "all 0.3s ease",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ color: "primary.main", mb: 2 }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="body1" color="text.secondary">
                        {feature.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Location;
