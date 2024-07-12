import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
    EmailShareButton,
    FacebookShareButton,
    GabShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
  } from "react-share";
  import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    GabIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon,
    XIcon,
  } from "react-share";

function BetterShare(){
    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);
   
    const shareUrl = window.location.href
    const title = "Youtube"

    return (
      <>
        <Button onClick={handleOpen} variant="gradient">
          Please Share!
        </Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>
            <div className="justify-center">Don't gatekeep, please share!</div>
          </DialogHeader>
          <DialogBody>
            <div className="justify-evenly">
                <FacebookShareButton url={shareUrl}>
                    <FacebookIcon/>
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl}>
                    <TwitterIcon/>
                </TwitterShareButton>
                <WhatsappShareButton url={shareUrl}>
                    <WhatsappIcon/>
                </WhatsappShareButton>
                <RedditShareButton url={shareUrl}>
                    <RedditIcon/>
                </RedditShareButton>
                <TelegramShareButton url={shareUrl}>
                    <TelegramIcon/>
                </TelegramShareButton>
                <LinkedinShareButton url={shareUrl}>
                    <LinkedinIcon/>
                </LinkedinShareButton>
                <EmailShareButton url={shareUrl}>
                    <EmailIcon/>
                </EmailShareButton>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );  
}

export default BetterShare;