import React, { useState } from "react";
import Layout from "../../../../components/Layout";
import { Typography, Box } from "@mui/material";
import ContentCard from "../../../../components/ContentCard";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import UploadIcon from "@mui/icons-material/Upload";
import { useRouter } from "next/router";
const CreatePage = () => {
  const [selectedKey, setSelectedKey] = useState("create");
  const router = useRouter();

  const openEditor = () => {
    router.push("/QuestionSetEditor");
  };

  const cardData = [
    {
      title: "Course",
      description:
        "Design courses using collections and resources. Courses are for a duration, to achieve an objective.",
      icon: <DescriptionOutlinedIcon fontSize="large" />,
      onClick: openEditor,
    },
    {
      title: "Upload Content",
      description: "You can upload content here.",
      icon: <UploadIcon fontSize="large" />,
      onClick: () => {
        console.log("Uploading content");
        // Add your content upload logic here
      },
    },
    {
      title: "Question Set",
      description: "Create Questionsets",
      icon: <DescriptionIcon fontSize="large" />,
      onClick: () => {
        console.log("Creating question set");
        // Add your question set creation logic here
      },
    },
  ];

  return (
    <Layout selectedKey={selectedKey} onSelect={setSelectedKey}>
      <Box p={3}>
        <Typography variant="h4">Create Content</Typography>
        <Typography>Here you can create new content.</Typography>
      </Box>

      <Box
        display={"flex"}
        gap={"1rem"}
        padding={"1rem"}
        justifyContent={"flex-start"}
      >
        {cardData.map((card, index) => (
          <ContentCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            onClick={card.onClick}
          />
        ))}
      </Box>
    </Layout>
  );
};

export default CreatePage;
