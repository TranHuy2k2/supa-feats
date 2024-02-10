import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  IconButton,
  Input,
  Stack,
} from "@chakra-ui/react";
import OnlineUsers from "./OnlineUsers";
import { useContext, useState } from "react";
import { sendMessage } from "../services/messages";
import AppContext from "../context/AppContext";

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const { username, countryCode } = useContext(AppContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage({ content: message, username, countryCode });
  };
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        paddingLeft: "1rem",
        paddingTop: "1rem",
        width: 400,
      }}
    >
      <OnlineUsers />
      <div>
        <Card>
          <CardHeader>
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              ChatBox
            </h2>
          </CardHeader>
          <CardBody>
            <Box py="10px" pt="15px">
              <Container maxW="600px">
                <form onSubmit={handleSubmit} autoComplete="off">
                  <Stack direction="row">
                    <Input
                      name="message"
                      placeholder="Enter a message"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      bg="white"
                      autoFocus
                      maxLength="500"
                    />
                    <IconButton
                      // variant="outline"
                      colorScheme="teal"
                      aria-label="Send"
                      fontSize="20px"
                      icon={<ArrowRightIcon />}
                      type="submit"
                    />
                  </Stack>
                </form>
                <Box fontSize="10px" mt="1">
                  Warning: this is a public chat, do not share sensitive
                  information.
                </Box>
              </Container>
            </Box>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}