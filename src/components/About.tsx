import { Groups, Psychology, Timer, TrendingUp } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const About: React.FC = () => {
  const stats = [
    { icon: <Psychology />, value: "500+", label: "Задоволених клієнтів" },
    { icon: <Groups />, value: "4", label: "Професійних симуляторів" },
    { icon: <Timer />, value: "11:00 - 01:00", label: "Режим роботи" },
    { icon: <TrendingUp />, value: "98%", label: "Позитивних відгуків" },
  ];

  return (
    <Box
      id="about"
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
            Про F1 Club
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
            Ми створили унікальний простір, де кожен може відчути себе справжнім
            пілотом Формули-1
          </Typography>
        </motion.div>

        {/* <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" sx={{ mb: 3, color: "primary.main" }}>
                Наша місія
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 3, color: "text.secondary", lineHeight: 1.8 }}
              >
                F1 Club - це перший професійний центр автосимуляторів у місті,
                де поєднуються найсучасніші технології та пристрасть до
                автоспорту. Ми прагнемо надати нашим відвідувачам максимально
                реалістичний досвід керування болідом Формули-1.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.8 }}
              >
                Наші симулятори оснащені професійним обладнанням, включаючи
                кермо з силовою віддачею, педальний блок з навантаженням та
                ергономічні крісла, що забезпечують повне занурення в процес
                гонки.
              </Typography>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" sx={{ mb: 3, color: "primary.main" }}>
                Чому обирають нас?
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                  "Професійне обладнання Logitech та Thrustmaster",
                  "Офіційні ліцензійні симулятори F1 2024",
                  "Великі 4K монітори з високою частотою оновлення",
                  "Комфортні зони відпочинку та кафе",
                  "Індивідуальні та групові тренування",
                  "Регулярні турніри з призовим фондом",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                        }}
                      />
                      <Typography variant="body1" color="text.secondary">
                        {item}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid> */}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={index}>
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
                      height: "100%",
                    }}
                  >
                    <CardContent sx={{ py: 4 }}>
                      <Box
                        sx={{
                          color: "primary.main",
                          fontSize: "2.5rem",
                          mb: 2,
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 700,
                          color: "white",
                          mb: 1,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.label}
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

export default About;
