import {
  EmojiEvents,
  LocalShipping,
  Speed,
  SportsEsports,
  Terrain,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const Games: React.FC = () => {
  const gameCategories = [
    {
      title: "Симулятори",
      subtitle: "Справжній виклик",
      description:
        "Для тих, хто прагне максимального реалізму, точності та відчуття справжнього водіння. Ці ігри вимагають майстерності та терпіння.",
      icon: <SportsEsports />,
      color: "success.main",
      isPopular: true,
      games: [
        {
          name: "Gran Turismo 7",
          description:
            "Легенда серед гоночних симуляторів. Це не просто гра, а справжнє свято автомобільної культури. Збирайте колекцію мрій, відточуйте свої навички та беріть участь у змаганнях на найвідоміших трасах світу. Гра ідеально поєднує реалістичну фізику та захопливий контент.",
          logo: "🏁",
        },
        {
          name: "Assetto Corsa Competizione",
          description:
            "Офіційний симулятор серії перегонів GT World Challenge. Якщо ви хочете відчути, як керується справжній гоночний болід, ця гра — ваш вибір. Реалістична фізика та деталізовані траси подарують незабутні емоції.",
          logo: "🏆",
        },
        {
          name: "F1 23",
          description:
            "Відчуйте себе пілотом Формули-1. Керуйте найшвидшими болідами світу на відомих трасах. Гра пропонує реалістичну модель поведінки авто, глибокий режим кар'єри та можливість змагатися з друзями.",
          logo: "🏎️",
        },
      ],
    },
    {
      title: "Аркадні гонки",
      subtitle: "Швидкість і видовище",
      description:
        "Ці ігри ідеально підходять для тих, хто хоче одразу зануритися в динамічні перегони без складнощів.",
      icon: <Speed />,
      color: "primary.main",
      games: [
        {
          name: "Forza Horizon 5",
          description:
            "Прокатіться мальовничою Мексикою — від пустель до тропічних лісів — у гігантському відкритому світі. Це свято швидкості, неймовірних краєвидів та сотень ліцензованих автомобілів. Чудова гра для тих, хто цінує свободу та веселощі.",
          logo: "🏎️",
        },
        {
          name: "Need for Speed Heat",
          description:
            "Відчуйте напругу вуличних гонок вдень і вночі. Вдень ви заробляєте гроші на офіційних заїздах, а вночі берете участь у нелегальних перегонах, тікаючи від поліції. Гра пропонує глибокий тюнінг та захопливий сюжет.",
          logo: "🔥",
        },
      ],
    },
    {
      title: "Симулятори вантажівок",
      subtitle: "Королі доріг",
      description:
        "Відчуйте романтику далеких доріг та велич вантажівок! Ці ігри пропонують розслаблений, але захопливий досвід водіння та управління логістичною компанією.",
      icon: <LocalShipping />,
      color: "info.main",
      games: [
        {
          name: "Euro Truck Simulator 2",
          description:
            "Керуйте потужною вантажівкою та подорожуйте мальовничими європейськими дорогами, доставляючи вантажі. Ви можете створити власну компанію, купувати нові вантажівки та наймати водіїв. Це ідеальний симулятор для тих, хто цінує спокій і подорожі.",
          logo: "🚛",
        },
      ],
    },
    {
      title: "Ралі та бездоріжжя",
      subtitle: "Грязь і адреналін",
      description:
        "Забудьте про ідеальний асфальт! Тут панують складні траси, небезпечні повороти та постійна боротьба з рельєфом.",
      icon: <Terrain />,
      color: "warning.main",
      games: [
        {
          name: "DiRT Rally 2.0",
          description:
            "Жорсткий і безкомпромісний симулятор ралі. Кожен поворот, кожен занос і кожен метр траси відчувається як справжній виклик. Це гра для тих, хто шукає хардкорний досвід та готовий долати труднощі.",
          logo: "🏔️",
        },
      ],
    },
  ];

  return (
    <Box
      id="games"
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
            Каталог гоночних ігор та симуляторів
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 8,
              color: "text.secondary",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Ласкаво просимо до світу швидкості, адреналіну та реву двигунів! У
            нашому клубі зібрані найкращі гоночні ігри, які задовольнять як
            любителів аркадних веселощів, так і шанувальників реалістичних
            симуляторів. Обирайте свою трасу і рушайте до перемоги!
          </Typography>
        </motion.div>

        {/* Game Categories */}
        <Grid container spacing={4}>
          {gameCategories.map((category, categoryIndex) => (
            <Grid size={{ xs: 12 }} key={categoryIndex}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    backgroundColor: category.isPopular
                      ? "rgba(0, 255, 255, 0.1)"
                      : "background.paper",
                    border: category.isPopular
                      ? "2px solid #00ffff"
                      : "1px solid rgba(0, 255, 255, 0.2)",
                    position: "relative",
                    mb: 4,
                  }}
                >
                  {category.isPopular && (
                    <Chip
                      label="Найпопулярніше"
                      color="primary"
                      sx={{
                        position: "absolute",
                        top: 12,
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 1,
                      }}
                    />
                  )}

                  <CardContent sx={{ p: 4 }}>
                    {/* Category Header */}
                    <Box sx={{ textAlign: "center", mb: 4 }}>
                      <Box
                        sx={{
                          color: category.color,
                          fontSize: "3rem",
                          mb: 2,
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography variant="h3" sx={{ mb: 1, fontWeight: 600 }}>
                        {category.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {category.subtitle}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ maxWidth: "800px", mx: "auto", lineHeight: 1.6 }}
                      >
                        {category.description}
                      </Typography>
                    </Box>

                    {/* Games List */}
                    <Grid container spacing={3}>
                      {category.games.map((game, gameIndex) => (
                        <Grid size={{ xs: 12, md: 6, lg: 4 }} key={gameIndex}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.5,
                              delay: gameIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                          >
                            <Card
                              sx={{
                                height: "280px", // Фіксована висота для всіх карточок
                                display: "flex",
                                flexDirection: "column",
                                backgroundColor: "rgba(26, 26, 26, 0.8)",
                                border: "1px solid rgba(0, 255, 255, 0.2)",
                                "&:hover": {
                                  borderColor: category.color,
                                  transform: "translateY(-4px)",
                                  transition: "all 0.3s ease",
                                },
                              }}
                            >
                              <CardContent
                                sx={{
                                  p: 3,
                                  height: "100%",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Box>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      mb: 2,
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        fontSize: "2rem",
                                        mr: 2,
                                      }}
                                    >
                                      {game.logo}
                                    </Typography>
                                    <Typography
                                      variant="h6"
                                      sx={{ fontWeight: 600 }}
                                    >
                                      {game.name}
                                    </Typography>
                                  </Box>
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                      lineHeight: 1.6,
                                      overflow: "hidden",
                                      display: "-webkit-box",
                                      WebkitLineClamp: 6,
                                      WebkitBoxOrient: "vertical",
                                    }}
                                  >
                                    {game.description}
                                  </Typography>
                                </Box>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
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
              mt: 6,
            }}
          >
            <EmojiEvents
              sx={{
                fontSize: "3rem",
                color: "primary.main",
                mb: 2,
              }}
            />
            <Typography
              variant="h4"
              sx={{ mb: 2, fontWeight: 600, color: "white" }}
            >
              Запрошуємо вас випробувати всі ці ігри!
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3, maxWidth: "600px", mx: "auto" }}
            >
              Знайдіть свою улюблену гру та відчуйте справжній адреналін гонок у
              нашому клубі. До зустрічі на трасі!
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Games;
