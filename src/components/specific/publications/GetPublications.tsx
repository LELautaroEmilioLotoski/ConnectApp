"use client";
import { useEffect, useState } from "react";
import { getUserId } from "@/hooks/getUserHook/getUserId";  
import { format } from "date-fns";
import { es } from "date-fns/locale";
import CardHeaderPublications from "./partsOfPublications/CardHeaderPublications";
import ActionButtons from "./partsOfPublications/ActionButtons";
import CardContent from "./partsOfPublications/CardContent";
import AnyPublications from "./partsOfPublications/AnyPublications";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublications } from "@/redux/publicationSlice";
import { getUserPublications } from "@/services/posts/getUserPublications";
import UpdatePublication from "./partsOfPublications/UpdatePublication";
import { Pencil } from "lucide-react";

const GetPublications = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const publicationsState = useSelector((state: any) => state.publications);    
  const userId = getUserId();
  const [activePostId, setActivePostId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUserPublications(userId);
        if (res && Array.isArray(res)) {
          const sortedPublications = res.sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          dispatch(fetchPublications(sortedPublications));
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching publications:", err);
      }
    };
  
    fetchData();
  }, [dispatch, userId]);
  

  const handleClick = (postId: number) => {
    setActivePostId(postId);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-xl mx-auto w-[600px]">
      {publicationsState.publications.length > 0 ? (
        <div className="space-y-6">
          {publicationsState.publications.map((pub: any) => {
            const postTime = `${pub.createdAt}`;
            const formattedDate = format(
              new Date(pub.createdAt),
              "d 'de' MMMM 'de' yyyy",
              { locale: es }
            );
            const timeAgo = format(new Date(pub.createdAt), "PPp", {
              locale: es,
            });            

            return (
              <div key={pub.id} className="card bg-white shadow-md">
                {activePostId === pub.id ? ( 
                  <UpdatePublication postId={pub} timeAgo={timeAgo} publication={pub} />
                ) : (
                  <>
                    <CardHeaderPublications timeAgo={timeAgo} postId={pub} />
                    <div className="flex justify-end">
                      <button onClick={() => handleClick(pub.id)} className="pr-6">
                        <Pencil size={16} />
                      </button>
                    </div>
                    <CardContent postTime={postTime} publication={pub} />
                    <ActionButtons postTime={postTime} postId={pub} />
                    <div className="card-footer p-4 pt-0 text-xs opacity-70 text-right">
                      <p>{formattedDate}</p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <AnyPublications />
      )}
    </div>
  );
};

export default GetPublications;
