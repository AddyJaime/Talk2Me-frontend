import { StyleSheet } from "react-native";
import colors from "@/styles/colors";
import spacing from "@/styles/spacing";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  scrollView: {
    flex: 1,
    marginTop: 10
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBackground,
    borderTopWidth: spacing.xs,
    borderTopColor: colors.inputBorderColor,
    paddingTop: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  sendButton: {
    marginRight: spacing.sm,
    backgroundColor: colors.buttonBackgroundColor,
    borderRadius: spacing.lg,
    padding: spacing.md,
    marginLeft: spacing.sm,
  },
  messageText: {
    color: colors.chatMessageText,
    fontSize: spacing.lg,
  },
  messagesDisplay: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xs,

  },
  messagesColor: {
    borderRadius: spacing.xxl,
    padding: spacing.md,
  },
  messageInput: {
    flex: 1,
    backgroundColor: colors.messageInputBGColor,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: spacing.xxl,
    padding: spacing.md,
    fontSize: spacing.xl,
    marginVertical: spacing.md,
    marginLeft: spacing.md,

  },

});

export default styles